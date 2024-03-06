<script setup>

useHead({
    title: "TypeChars articles",
})


const articles = [
    {
        id: 1,
        title: 'Unveiling TypeChars: Revolutionizing the Way We Think About Typing',
        imageUrl: 'https://u01uxt2pwyoavzuv.public.blob.vercel-storage.com/articles/unveiling-typechars-revolutionizing-the-way-we-think-about-typing.webp',
        summary: `In the digital era, typing is not just a skill but a bridge connecting ideas with the digital world.
                Whether for personal growth, professional development, or creative expression, the ability to type`,
        url: 'unveiling-typechars-revolutionizing-the-way-we-think-about-typing'
    },
    {
        id: 2,
        title: 'Enhancing Typing Skills Through Practice and Persistence: A Guide for Beginners',
        imageUrl: 'https://u01uxt2pwyoavzuv.public.blob.vercel-storage.com/articles/enhancing-typing-skills-through-practice-and-persistence-a-guide-for-beginners.webp',
        summary: `Embarking on the journey to improve your typing skills can seem daunting at first, but with the right
                approach, it's an achievable goal. This guide is designed to help beginners understand the basics of`,
        url: 'enhancing-typing-skills-through-practice-and-persistence-a-guide-for-beginners'
    },
    {
        id: 3,
        title: 'Improving Typing Speed and Accuracy: Tips and Techniques',
        imageUrl: 'https://u01uxt2pwyoavzuv.public.blob.vercel-storage.com/articles/improving-typing-speed-and-accuracy-tips-and-techniques.webp',
        summary: `In today's fast-paced digital world, typing is not merely a skill—it's an essential tool for
                communication, education, and professional success. Enhancing your typing speed and accuracy can`,
        url: 'improving-typing-speed-and-accuracy-tips-and-techniques'
    },
    {
        id: 4,
        title: 'Maximizing Productivity: Advanced Typing Techniques for Professionals',
        imageUrl: 'https://u01uxt2pwyoavzuv.public.blob.vercel-storage.com/articles/maximizing-productivity-advanced-typing-techniques-for-professionals.webp',
        summary: `In the modern workplace, typing is not just a skill—it's a critical tool for achieving peak
                productivity. Professionals across various industries can benefit from refining their typing techniques`,
        url: 'maximizing-productivity-advanced-typing-techniques-for-professionals'
    },
    {
        id: 5,
        title: 'The Future of Typing: Innovations and Trends in Keyboard Technology',
        imageUrl: 'https://u01uxt2pwyoavzuv.public.blob.vercel-storage.com/articles/the-future-of-typing-innovations-and-trends-in-keyboard-technology.webp',
        summary: `As we advance further into the digital age, the way we interact with devices continues to evolve.
                Typing, an essential mode of digital communication, is no exception. This article explores the`,
        url: 'the-future-of-typing-innovations-and-trends-in-keyboard-technology'
    },
    {
        id: 6,
        title: 'The Importance of Proper Typing Ergonomics',
        imageUrl: 'https://u01uxt2pwyoavzuv.public.blob.vercel-storage.com/articles/the-importance-of-proper-typing-ergonomics.webp',
        summary: `As we advance further into the digital age, the way we interact with devices continues to evolve.
                Typing, an essential mode of digital communication, is no exception. This article explores the`,
        url: 'the-importance-of-proper-typing-ergonomics'
    },
    {
        id: 7,
        title: 'Typing Speed: What Determines It and How to Improve Yours',
        imageUrl: 'https://u01uxt2pwyoavzuv.public.blob.vercel-storage.com/articles/typing-speed-what-determines-it-and-how-to-improve-yours.webp',
        summary: `Typing speed is a vital skill in today's digital world, affecting everything from professional
                productivity to personal communication. Understanding what determines typing speed and how to enhance it`,
        url: 'typing-speed-what-determines-it-and-how-to-improve-yours'
    },
    {
        id: 8,
        title: 'Choosing the Right Keyboard for Faster Typing',
        imageUrl: 'https://u01uxt2pwyoavzuv.public.blob.vercel-storage.com/articles/choosing-the-right-keyboard-for-faster-typing.webp',
        summary: `The journey to faster typing isn't solely about skill and practice; the hardware you use plays a pivotal
                role. A keyboard that aligns with your typing habits and physical needs can significantly enhance both`,
        url: 'choosing-the-right-keyboard-for-faster-typing'
    },
]
</script>

<template>
    <div class="max-w-screen-lg container mx-auto px-4">
        <header class="text-center py-5">
            <h1 class="text-4xl font-bold text-gray-800 dark:text-white">Type Chars articles</h1>
        </header>
        <section class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <CardArticle v-for="article in articles" :key="article.id" :data="article" />
        </section>

    </div>
</template>

<style></style>