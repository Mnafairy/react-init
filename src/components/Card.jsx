const Card = ({data}) => {
  console.log("inside card component: ", data);
  return (
    <div>
      <p>{data.title}</p>
      <img src={data.img} alt="" />
      <div>
        {data.map((e) => (
          <>
            <p>{e.title}</p>
            <img src={e.img} />
          </>
        ))}
      </div>
    </div>
  );
};
export default Card;
// [{}, {}, {}]; 