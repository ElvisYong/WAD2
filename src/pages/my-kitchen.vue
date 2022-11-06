<script setup>
useHead({
    title: "My Kitchen",
});
</script>

<template>
    <div class="sm:mx-16 lg:mx-16 xl:mx-60">
        <div class="mt-10">
            <h1 class="text-2xl">Ready made recipes with the ingredients you have!</h1>
            <!-- TODO: Change the text here -->
            <p class="mt-6 text-sm">
                It's no secret that grocery shopping can be a drag. But if you have a few ingredients on hand, we have
                some great ways to make them into dinner.

                Just enter your ingredients below and we'll show you how to prepare a meal with what you have. For
                best results, enter 10 or more ingredients below, such as staples like salt, pepper, onion and garlic.
            </p>

            <div class="mt-6">
                <label for="ingredients" class="block text-sm font-medium text-gray-700">Ingredients</label>
                <div class="mt-1">
                    <input type="text" name="ingredients" id="ingredients"
                        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                </div>
            </div>
        </div>
    </div>
</template>