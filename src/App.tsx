import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

function SearchBar() {
  return (
    <form>
      <div className="space-y-2">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Personal Information
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Use a permanent address where you can receive mail.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="col-span-full">
            <label
              htmlFor="search-bar"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Search
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="search-bar"
                id="search-bar"
                autoComplete="search-bar"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-4">
          <div className="mt-1 space-y-4">
            <fieldset>
              <div className="mt-2 space-y-2">
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="inStock"
                      name="inStock"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label
                      htmlFor="inStock"
                      className="font-medium text-gray-900"
                    >
                      Only Show Products In Stock
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </form>
  );
}

interface ProductTableProps {
  products: object;
}

function ProductTable({ products }: ProductTableProps) {
  return (
    <>
      <h3>Name</h3>
      <h3>Price</h3>
    </>
  );
}

interface FilterableProductTableProps {
  products: object;
}

function FilterableProductTable({ products }: FilterableProductTableProps) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl">
        <SearchBar />
        <ProductTable products={products} />
      </div>
    </div>
  );
}

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}
