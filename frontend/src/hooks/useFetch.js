import { useEffect, useState } from "react";

const API_BASE =
    import.meta.env.VITE_API_URL || "https://prakash-sofa-makers.onrender.com/api";

export default function useFetch(path) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        fetch(`${API_BASE}${path}`, { signal: controller.signal })
            .then((res) => (res.ok ? res.json() : Promise.reject()))
            .then((json) =>
                // works with plain arrays and with paginated responses
                setData(Array.isArray(json) ? json : json.results ?? [])
            )
            .catch((err) => {
                if (err?.name !== "AbortError") setError(true);
            })
            .finally(() => {
                if (!controller.signal.aborted) setLoading(false);
            });

        return () => controller.abort();
    }, [path]);

    return { data, loading, error };
}