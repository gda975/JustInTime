import { createContext, useEffect, useState } from 'react';
import { getData } from '../../../FirebaseAPI';

export default DataContext = createContext({
    allData: [],
    categoryList: [],
});

export const DataProvider = (props) => {
    const [shownOnFeed, setShownOnFeed] = useState({
        'Policy Links': true,
        'Useful Sites': true,
        'Helpful Reading': true,
        'Instructional Videos': true,
        'Workplace Updates': true,
        'Staff Event': true,
    });
    const [categoryList, setCategoryList] = useState();
    const [allData, setAllData] = useState([]);
    const [refreshTrigger, setRefreshTrigger] = useState(true);

    useEffect(() => {
        setCategoryList(Object.keys(shownOnFeed).filter((e) => shownOnFeed[e]));
    }, [shownOnFeed]);

    useEffect(() => {
        setAllData(getData('ALL').reverse());
    }, [refreshTrigger]);

    const refresh = () => {
        setRefreshTrigger(!refreshTrigger);
    };

    const updateFeed = (category, isShown) => {
        setShownOnFeed({
            ...shownOnFeed,
            [category]: isShown,
        });
    };

    return (
        <DataContext.Provider
            value={{ allData, categoryList, refresh, updateFeed }}
        >
            {props.children}
        </DataContext.Provider>
    );
};

export const DataConsumer = DataContext.Consumer;
