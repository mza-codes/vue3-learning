import { DirectiveBinding } from "vue";

const lazyLoadDirective = {
    mounted(el: HTMLElement, binding: DirectiveBinding<string>) {
        const lazyImage = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const img = entry.target as HTMLImageElement;
                    img.src = binding.value;
                    lazyImage.unobserve(img);
                }
            },
            {
                rootMargin: "60px",
                threshold: 0.2,
            }
        );

        lazyImage.observe(el);
    },
};

export default lazyLoadDirective;
