import Typography from "../Typography"
import client1 from '../../assets/clients/client-1.png';
import client2 from '../../assets/clients/client-2.png';
import client3 from '../../assets/clients/client-3.png';
import client4 from '../../assets/clients/client-4.png';
import client5 from '../../assets/clients/client-5.png';

const Clients = () => {
  return (
      <section className="clients px-4 py-12 lg:px-0">
          <Typography.h2 className="text-center tracking-wider text-black">
              Our Clients
          </Typography.h2>
          <div className="content max-w-7xl mx-auto mt-8 grid grid-cols-1 grid-rows-[150px] sm:grid-rows-none sm:grid-cols-3 lg:grid-cols-5 place-content-center place-items-center gap-10">
            {[client1, client2, client3, client4, client5].map((image, index) => <img src={image} className="w-64 object-contain flex items-center justify-center" alt={'Client' + (index + 1)} />)}
          </div>
    </section>
  )
}

export default Clients