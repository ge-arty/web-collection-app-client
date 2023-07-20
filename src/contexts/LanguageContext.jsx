import { createContext, useContext, useMemo, useState } from "react";

export const languageDictionary = {
  EN: {
    explore: "Explore",
    dashboard: "Dashboard",
    signOut: "Singout",
    login: "Login",
    register: "Register",
    adminPanel: "Admin Panel",
    email: "Email",
    password: "Password",
    username: "Username",
    exploreMainTitle:
      "Register, create your first collection and join our friendly community!",
    biggestCollections: "Biggest Collections",
    newItems: "New Items",
    name: "Name",
    date: "Date",
    description: "Description",
    createdAt: "Creation Date",
    ownerId: "Owner ID",
    customFields: "Custom Fields",
    seeItems: "See Items",
    adminStatus: "Status",
    createCollection: "Create Collection",
    filterCollections: "Filter your collections",
    books: "Books",
    stamps: "Stamps",
    silverware: "Silverware",
    coins: "Coins",
    others: "Others",
    noCollections: "There is no Collections yet",
    remove: "Remove",
    actions: "Actions",
    edit: "Edit",
    createItem: "Create Item",
    noItemsFound: "No items found in this collection!",
    sortByDate: "Sort By Creation Date",
    fromOldtoNew: "From Old to New",
    fromNewToOld: "From New to Old",
    collectionCategory: "Collection category",
    image: "Image",
    add: "Add collection",
    newFieldName: "Field Name",
    newFieldValue: "Field Value",
    addNewField: "Add Field",
    removeField: "Remove Field",
    blockStatus: "Block Status",
    id: "id",
    giveAdmin: "Give Admin",
    unBlock: "unBlock",
    removeAccount: "Remove Account",
    block: "Block User",
    removeAdmin: "Remove Admin",
  },
  Ge: {
    explore: "გამოიკვლიეთ",
    dashboard: "პანელი",
    signOut: "გამოსვლა",
    login: "შესვლა",
    register: "რეგისტრაცია",
    adminPanel: "ადმინის პანელი",
    email: "ემეილი",
    password: "პაროლი",
    username: "სახელი",
    exploreMainTitle:
      "დარეგისტრირდით, შექმენით თქვენი პირველი კოლექცია და შეუერთდით ჩვენს მეგობრულ საზოგადოებას!",
    biggestCollections: "ყველაზე დიდი კოლექციები",
    newItems: "ახალი ნივთები",
    name: "სახელი",
    date: "თარიღი",
    description: "აღწერა",
    createdAt: "შექმნის თარიღი",
    ownerId: "მფლობელის ID",
    customFields: "დამატებითი ველები",
    seeItems: "საგნების ნახვა",
    adminStatus: "სტატუსი",
    createCollection: "ახალი კოლექციის დამატება",
    filterCollections: "გაფილტრე შენი კოლექციები",
    books: "წიგნები",
    stamps: "მარკები",
    silverware: "ვერცხლის ჭურჭელი",
    coins: "მონეტები",
    others: "სხვა",
    noCollections: "კოლექციები ვერ მოიძებნა",
    remove: "წაშლა",
    actions: "მოქმედებები",
    edit: "რედაქტირება",
    noItemsFound: "ნივთი ამ კოლექციაში ვერ მოიძებნა",
    sortByDate: "სორტირება შექმნის თარიღის მიხედვით",
    fromOldtoNew: "ძველიდან => ახლამდე",
    fromNewToOld: "ახლიდან => ძველამდე",
    collectionCategory: "კოლექციის კატეგორია",
    image: "სურათი",
    add: "დამატება",
    createItem: "ნივთის დამატება",
    newFieldName: "ველის სახელი",
    newFieldValue: "ველის მნიშვნელობა",
    addNewField: "ველის დამატება",
    removeField: "ველის წაშლა",
    blockStatus: "ბლოკის სტატუსი",
    id: "id",
    giveAdmin: "ადმინის მიცემა",
    unBlock: "ბლოკის მოხსნა",
    removeAccount: "ექაუნტის წაშლა",
    block: "ბლოკირება",
    removeAdmin: "ადმინის წართმება",
  },
};

const LanguageContext = createContext(null);

const LanguageContextProvider = ({ children }) => {
  const [isGeorgian, setIsGeorgian] = useState(false);

  const contextValue = useMemo(
    () => ({
      language: isGeorgian ? "Ge" : "EN",
      dictionary: languageDictionary[isGeorgian],
      toggleLanguage: () => setIsGeorgian((prevState) => !prevState),
    }),
    [isGeorgian]
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => {
  const contextValue = useContext(LanguageContext);

  if (!contextValue) throw new Error(`language context not found!`);

  return contextValue;
};

export default LanguageContextProvider;
