export function genColor() {
    return `hsl(${Math.random() * 360}, 100%, 75%)`;
}

export function genRandomNumber(max = 10) {
    return Math.floor(Math.random() * max);
}

export async function fetchImages<T>(page = 3, limit = 50) {
    try {
        const data: T = await fetch(
            `https://picsum.photos/v2/list?page=${page}&limit=${limit}`
        ).then((res) => res.json());
        cacheData("img-cache", JSON.stringify(data));
        return data;
    } catch (err: unknown) {
        console.log("@Error fetching data!\n", err);
        return null;
    }
}

export function cacheData(key: string, value: string) {
    localStorage.setItem(key, value);
}
