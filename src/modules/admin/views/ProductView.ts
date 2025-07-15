import { createUpdateProduct, getProductById } from '@/modules/products/actions';
import { useMutation, useQuery } from '@tanstack/vue-query';
import { defineComponent, getCurrentInstance, watch, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { useFieldArray, useForm } from 'vee-validate';
import * as yup from 'yup';
import CustomInput from '@/modules/common/components/CustomInput.vue';
import CustomTextArea from '@/modules/common/components/CustomTextArea.vue';
import { useToast } from 'vue-toastification';

const validationSchema = yup.object({
  title: yup.string().required().min(3),
  slug: yup.string().required().min(5),
  price: yup.number().required(),
  stock: yup.number().required().min(1),
  description: yup.string().required().min(5),
  gender: yup.string().required().oneOf(['men', 'women', 'kid', 'unisex']),
});

export default defineComponent({
  components: {
    CustomInput,
    CustomTextArea,
  },
  props: {
    productId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter();
    const toast = useToast();

    const {
      data: product,
      isError,
      isLoading,
      refetch,
    } = useQuery({
      queryKey: ['product', props.productId],
      queryFn: () => getProductById(props.productId),
      retry: false,
    });

    const {
      mutate,
      isPending,
      isSuccess: isUpdateSuccess,
      data: updateProduct,
    } = useMutation({
      mutationFn: createUpdateProduct,
    });

    const { defineField, values, errors, handleSubmit, resetForm, meta } = useForm({
      validationSchema,
      initialValues: product.value,
    });

    const [title, titleAttrs] = defineField('title');
    const [slug, slugAttrs] = defineField('slug');
    const [price, priceAttrs] = defineField('price');
    const [stock, stockAttrs] = defineField('stock');
    const [description, descriptionAttrs] = defineField('description');
    const [gender, genderAttrs] = defineField('gender');

    const { fields: images } = useFieldArray<string>('images');
    const { fields: sizes, remove: removeSize, push: pushSize } = useFieldArray<string>('sizes');

    const onSubmit = handleSubmit(async (values) => {
      //  const product = await createUpdateProduct(value);
      //  console.log({ product });
      mutate(values);
    });

    const toggleSizes = (size: string) => {
      const currentSizes = sizes.value.map((s) => s.value);
      const hasSizes = currentSizes.includes(size);
      if (hasSizes) {
        removeSize(currentSizes.indexOf(size));
      } else {
        pushSize(size);
      }
    };

    watchEffect(() => {
      if (isError.value && !isLoading.value) {
        router.replace('/admin/products');
        return;
      }
    });

    watch(
      product,
      () => {
        if (!product) return;
        resetForm({
          values: product.value,
        });
      },
      {
        deep: true,
        immediate: true,
      },
    );

    watch(isUpdateSuccess, (value) => {
      if (!value) return;

      toast.success('Producto actualizado correctamente!');
      router.replace(`/admin/products/${updateProduct.value.id}`);

      resetForm({
        values: updateProduct.value,
      });
    });

    watch(
      () => props.productId,
      () => {
        refetch();
      },
    );

    return {
      values,
      title,
      titleAttrs,
      slug,
      slugAttrs,
      price,
      priceAttrs,
      stock,
      stockAttrs,
      description,
      descriptionAttrs,
      gender,
      genderAttrs,
      errors,
      images,
      meta,

      allSizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      onSubmit,
      toggleSizes,
      isPending,

      hasSize: (size: string) => {
        const currentSizes = sizes.value.map((s) => s.value);
        return currentSizes.includes(size);
      },
    };
  },
});
