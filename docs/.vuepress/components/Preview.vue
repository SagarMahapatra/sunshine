<template>
    <div style="margin-bottom: 30px;">
        <link-preview :url="url" card-width="200px">
            
        </link-preview>
    </div>
</template>

<script>
//import LinkPreview from 'link-preview'

export default {
    props: ['url'],
    
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