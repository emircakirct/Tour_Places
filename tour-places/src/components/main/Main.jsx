import './Main.css';
import Card from './card/Card';
import { data } from '../../backend/data';
function Main() {
  // console.log(data);
  return (
    <div className="card-container">
      {
        /* <Card title={data[1].title} desc={data[1].desc} image={data[1].image} />
      <Card {...data[0]} text="testing" />
      <Card {...data[2]} /> */
        // data.map((item, index) => {
        //   // return <Card {...item} key={index} />;
        //   return (
        //     <Card
        //       title={item.title}
        //       image={item.image}
        //       desc={item.desc}
        //       key={index}
        //     />
        //   );
        // })
        data.map((item, index) => (
          <Card {...item} key={index} />
        ))
      }
    </div>
  );
}

export default Main;