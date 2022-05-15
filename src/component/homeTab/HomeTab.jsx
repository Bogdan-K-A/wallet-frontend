import './homeTab.scss';
import getOperationsOpertaion from '@redux/finance/finance-operation';
import getOperations from '@redux/finance/finance-selector';
import HomeTabList from '../homeTabList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const HomeTab = () => {
    const dispatch = useDispatch();
    const operations = useSelector(getOperations);

    useEffect(() => {
        if (operations.length === 0) {
            dispatch(getOperationsOpertaion());
        }
    }, []);

    return operations.length !== 0 ? (
        <section className="homeTab-section">
            <div className="container">
                <HomeTabList operations={operations} />
            </div>
        </section>
    ) : (
        <h1>Загрузка...</h1>
    );
};

export default HomeTab;
