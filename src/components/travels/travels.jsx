import { TripsFilter, Travellist } from './components/components'
import { useCallback, useState } from '../../hooks/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTrips } from '../../features/content/contentActions';
import './styles.css';
import HeaderMax from '../header/header-max';
import Placeholder from '../common/placeholder/placeholder';
import { DataPlaceholder } from '../../common/enums/enum';
import { getFilteredTravels } from './helpers/helpers';
import { DEFAULT_FILTER_VALUES } from './common/constants';
import Error from '../common/error/Error';
import Loader from '../common/loader/loader';

const Travels = () => {

    const {loading, travels, error} = useSelector((state) => state.trips);
    const dispatch = useDispatch();

    useEffect(() => {
    dispatch(getTrips());
    }, [dispatch]);

    // const [travels, setTravels] = useState(fetchedTravels);    
    const [filterValues, setFilterValues] = useState(DEFAULT_FILTER_VALUES);

    const filteredTravels = getFilteredTravels(travels, filterValues);
    const hasTravels = Boolean(filteredTravels.length);

    const handlerFilterChange = (values) => setFilterValues(values);

    // console.log('log from travels.jsx. travels:', travels)

    if (loading) {return (
        <>
          <main className="sign-in-page">
            < Loader />
          </main>
        </>
      )       
    }

    return (
        <>
            <HeaderMax />
            <main>
                <h1 className="visually-hidden">Travel App</h1>
                <section className="trips-filter">
                    <h2 className="visually-hidden">Trips filter</h2>
                    <TripsFilter values={filterValues} onChange={handlerFilterChange} />
                </section>
                <section className="trips">
                    <h2 className="visually-hidden">Trips List</h2>
                    {error && <Error>{error}</Error>}
                    {hasTravels ? (<Travellist travels={filteredTravels} />) : (<Placeholder text={DataPlaceholder.NO_TRAVELS} />)}
                    
                </section>
            </main>
        </>
    );
};

export default Travels;