import actions from "./actions";
import types from "./types";

const {
    addFilter,
    deleteFilterValue,
    deleteFilter,
    deleteAllFilters,
    getFilters
} = actions;

const {
    ADDED_FILTER,
    DELETED_FILTER_VALUE,
    DELETED_FILTER,
    DELETED_ALL_FILTERS,
    GOT_FILTERS
} = types;

describe("filter actions", () => {
    describe("addFilter", () => {
        test("If it throws when no arguments are passed", () => {
            expect(
                () => {
                    addFilter(undefined)
                }
            ).toThrow();
        });

        test("If it throws when invalid argument type is passed", () => {
            expect(
                () => {
                    addFilter("test")
                }
            ).toThrow();
        });

        test("If it throws an error when filterValue has invalid data type ", () => {
            expect(
                () => {
                    addFilter({
                        colors: "red"
                    })
                }
            ).toThrowError(/data type/i)
        });

        test("If it returns correct object when all required arguments are provided", () => {
            const input = {
                colors: ["red"]
            }

            const output = {
                type: ADDED_FILTER,
                payload: filter
            }
            expect(addFilter(input)).toStrictEqual(output);
        });
    });

    describe("deleteFilterValue", () => {
        test("If it returns correct object when all required arguments are provided", () => {
            const input = {
                filterName: "colors",
                filterValue: "red"
            };

            const output = {
                type: DELETED_FILTER_VALUE,
                payload: input
            }

            expect(
                deleteFilterValue(input.filterName, input.filterValue)
            ).toStrictEqual(output)
        })
    });

    describe("deleteFilter", () => {
       test("If it returns correct object when all required arguments are provided", () => {
            const input = {
                filterName: "colors"
            };

            const output = {
                type: DELETED_FILTER,
                payload: input.filterName
            };

            expect(
                deleteFilter(input.filterName)
            ).toStrictEqual(output);
       });
    });

    describe("deleteAllFilters", () => {
       test("If it returns correct object when all required arguments are provided", () => {
           const output = {
               type: DELETED_ALL_FILTERS
           }
           expect(
               deleteAllFilters()
           ).toStrictEqual(output)
       })
    });

    describe("getFilters", () => {
       test("If it returns correct object when all required arguments are provided", () =>{
          const input = {
              colors: ["red", "green"]
          };

          const output = {
              type: GOT_FILTERS,
              payload: input,
          };

          expect(
              getFilters(input)
          ).toStrictEqual(output);
       });
    });
})