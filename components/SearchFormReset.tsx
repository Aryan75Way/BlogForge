"use client"

import Link from "next/link";
import {X} from "lucide-react";

const SearchFormReset = () => {
    const reset = () => {
        const form = document.querySelector('.search-form') as HTMLFormElement;

        if (form) form.reset();
    }

    return (
        <button type="reset" onClick={reset} className="text-black p-2 bg-zinc-100 rounded-sm">
            <Link href="/">
                <X className="size-5"/>
            </Link>
        </button>
    )
}
export default SearchFormReset