import Form from "next/form";
import { Search } from "lucide-react";
import SearchFormReset from "./SearchFormReset";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form
      action="/"
      scroll={false}
      className="flex bg-white p-2 rounded-sm shadow-xl max-w-xl gap-2 mx-auto items-center search-form"
    >
      <input
        name="query"
        defaultValue={query}
        className="p-2 rounded-sm w-full font-geist-mono bg-transparent outline-none flex-1 text-black"
        placeholder="Search for any blog on BlogForge ..."
      />

      <div className="space-x-2">
        {query && <SearchFormReset />}

        <button type="submit" className="text-black bg-zinc-100 p-2 rounded-sm">
          <Search className="size-5" />
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;