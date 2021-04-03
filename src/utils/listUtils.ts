
// FILTERS

/**
* Searches for a value contained (filterValue) in a given attributes (attToFilter) of the list items
* @param list : Array<any>
* @param filterValue : string
* @param attToFilter : string[]
* @returns 
*/
export const filterContains = (list: Array<any>, filterValue: string, attToFilter: string[]): any[] => {
    const filteredList = list.filter((item) => {
        let objToFilter: Array<any> = [];
        attToFilter.forEach((att) => {
            objToFilter = [...objToFilter, item[att]];
        });
        if (
            JSON.stringify(objToFilter)
                .toLowerCase()
                .includes(filterValue.toLowerCase())
        ) {
            return item;
        }
    });
    return filteredList;
}

const compare = (a: number | string, b: number | string, isAsc: boolean) => {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

/**
 * @param list
 * @param attribute : string -> Att to filter
 * @param direction : string / ASC or DESC
 */
export const sortData = (list, attribute: string, direction: string): any[] => {
    const isAsc = direction === 'ASC';
    const copyList = [...list]
    return copyList.sort((a, b) => compare(a[attribute], b[attribute], isAsc));
}