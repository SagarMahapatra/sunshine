<template>
<div>
    <h1 >{{title}}</h1>
    <div v-for="post in posts">
        <Preview url="https://vuejs.org/"></Preview>
    </div>
</div>
</template>

<script>
export default {
    props: ['title', 'path'],
    computed: {
        posts() {
            return this.$site.pages
                .filter(x => x.path.startsWith(this.path))
                .filter(x => !x.frontmatter.readme)
                .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
        }
    }
}
</script>