import { useEffect } from "react";

const useLink = (url, type) => {
    useEffect(() => {
        const link = document.createElement("link");

        link.rel = type;
        link.href = url;
        link.crossOrigin = "anonymous";

        document.head.appendChild(link);

        return () => {
            document.head.removeChild(link);
        };
    }, [url]);
};

const useFreeCodeCampTests = () => {
    useEffect(() => {
        const script = document.createElement("script");

        script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);
};

export { useLink, useFreeCodeCampTests};
