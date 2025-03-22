import { useEffect, useRef } from "react";

export function useTitle({title, descrption }){
    const previousTitle = useRef(document.title);
    const prevDescription = useRef(document.querySelector('meta[name=description]').getAttribute('content'))

    useEffect(() => {
        if(title){
            document.title = `${title} | Giffy`;
        }
        return () => document.title = previousTitle.current;
    }, [title]);

    useEffect(() => {
        const previousDescription = prevDescription.current
        const metaDescription = document.querySelector('meta[name=description]');
        if(descrption) {
            metaDescription.setAttribute('content', descrption);
        }

        return () => metaDescription.setAttribute('content', previousDescription);
    },[descrption])
}