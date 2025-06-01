// convert to lowercase
// replace accents with non-accented characters
// remove non letters/numbers/hypens/spaces characters
// remove trailing spaces
// replace spaces with dashes
export default (string: string): string => 
    string.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9- ]/g, "").trim().replace(/\s+/g, "-");
   