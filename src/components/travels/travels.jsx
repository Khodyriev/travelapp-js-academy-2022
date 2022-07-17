import { TripsFilter, Travellist } from './components/components'
import './styles.css';
import HeaderMax from '../header/header-max';

const Travels = () => {
    return (
        <>
            <HeaderMax />
            <main>
                <h1 className="visually-hidden">Travel App</h1>
                <section className="trips-filter">
                    <h2 className="visually-hidden">Trips filter</h2>
                    <TripsFilter />
                </section>
                <section className="trips">
                    <h2 className="visually-hidden">Trips List</h2>
                    <Travellist />
                </section>
            </main>
        </>
    );
};

export default Travels;