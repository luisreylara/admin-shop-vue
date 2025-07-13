import { getProductById } from '@/modules/products/actions';
import { useQuery } from '@tanstack/vue-query';
import { defineComponent, getCurrentInstance, watch, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { useFieldArray, useForm } from 'vee-validate';
import * as yup from 'yup';
import CustomInput from '@/modules/common/components/CustomInput.vue';
import CustomTextArea from '@/modules/common/components/CustomTextArea.vue';

const validationSchema = yup.object({
  title: yup.string().required('mensaje personalizado').min(3, 'debe de ser treeees'),
  slug: yup.string().required().min(5),
  price: yup.string().required(),
  stock: yup.string().required(),
  description: yup.string().required().min(5),
  gender: yup.string().required(),
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

    const {
      data: product,
      isError,
      isLoading,
    } = useQuery({
      queryKey: ['product', props.productId],
      queryFn: () => getProductById(props.productId),
      retry: false,
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

    const onSubmit = handleSubmit((value) => {
      console.log({ value });
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

      hasSize: (size: string) => {
        const currentSizes = sizes.value.map((s) => s.value);
        return currentSizes.includes(size);
      },
    };
  },
});
