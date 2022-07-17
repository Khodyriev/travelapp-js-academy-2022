import { TripsFilter, Travellist } from './components/components'
import './styles.css';

const Travels = () => {
    return (
        <>
            <main>
                <h1 className="visually-hidden">Travel App</h1>
                <section className="trips-filter">
                    <h2 className="visually-hidden">Trips filter</h2>
                    <TripsFilter />
                </section>
                <section class="trips">
                    <h2 class="visually-hidden">Trips List</h2>
                    <Travellist />
                </section>
            </main>
        </>
    );
};

export default Travels;