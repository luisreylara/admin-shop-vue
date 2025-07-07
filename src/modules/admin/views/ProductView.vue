<template>
    <div class="bg-white px-5 py-2 rounded">
        <h1 class="text-3xl">Producto: <small class="text-blue-500">nombre</small></h1>
        <hr class="my-4" />
    </div>

    <form class="grid grid-cols-1 sm:grid-cols-2 bg-white px-5 gap-5">
        <div class="first-col">
            <!-- Primera parte del formulario -->
            <div class="mb-4">
                <label for="title" block text-gray-700 text-sm font-bold mb-2>
                    Título
                </label>
                <input type="text" id="title"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="título" />
            </div>

            <div class="mb-4">
                <label for="slug" class="form-label">Slug</label>
                <input type="text" id="slug" c
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="slug" />
            </div>

            <div class="mb-4">
                <label for="description" class="form-label">Descripción</label>
                <textarea id="description"
                    class="shadow h-32 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
            </div>

            <div class="flex flex-row gap-3">
                <div class="mb-4">
                    <label for="price" class="form-label">Precio</label>
                    <input type="number" id="price" aria-describedby="helper-text-explanation"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="1" />
                </div>

                <div class="mb-4">
                    <label for="stock" class="form-label">Inventario</label>
                    <input type="number" id="stock" aria-describedby="helper-text-explanation"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="1" />
                </div>
            </div>

            <div>
                <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">Tallas</h3>
                <ul
                    class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center ps-3">
                            <input id="vue-checkbox-list" type="checkbox" value=""
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                            <label for="vue-checkbox-list"
                                class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                XS </label>
                        </div>
                    </li>
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center ps-3">
                            <input id="react-checkbox-list" type="checkbox" value=""
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                            <label for="react-checkbox-list"
                                class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">S</label>
                        </div>
                    </li>
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center ps-3">
                            <input id="angular-checkbox-list" type="checkbox" value=""
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                            <label for="angular-checkbox-list"
                                class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">M</label>
                        </div>
                    </li>

                </ul>
            </div>
        </div>

        <!-- Segunda columna -->
        <div class="first-col">
            <label for="stock" class="form-label">Imágenes</label>
            <!-- Row with scrollable horizontal -->
            <div class="flex p-2 overflow-x-auto space-x-8 w-full h-[265px] bg-gray-200 rounded">
                <div class="flex-shrink-0">
                    <img src="https://placehold.co/250" alt="imagen" class="w-[250px] h-[250px]" />
                </div>

                <div class="flex-shrink-0">
                    <img src="https://placehold.co/250" alt="imagen" class="w-[250px] h-[250px]" />
                </div>
            </div>
            <!-- Upload image -->


            <div class=" mx-auto">
                <label class="text-base text-slate-900 font-medium mb-3 block">Subir Imágen</label>
                <input multiple type="file" id="image"
                    class="w-full text-slate-500 font-medium text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-slate-500 rounded" />
                <p class="text-xs text-slate-500 mt-2 mb-5">PNG, JPG SVG, WEBP, and GIF are Allowed.</p>
            </div>

            <div class="mb-4">
                <label for="stock" class="block mb-3 text-sm font-medium text-gray-900 dark:text-white ">Género</label>
                <select
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Seleccione</option>
                    <option value="kid">Niño / Niña</option>
                    <option value="women">Mujer</option>
                    <option value="men">Hombre</option>
                </select>
            </div>

            <!-- Botón para guardar -->
            <div class="my-4 text-right">
                <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Guardar
                </button>
            </div>
        </div>
    </form>
</template>

<style scoped lang="scss"></style>