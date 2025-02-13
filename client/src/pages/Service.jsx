import { useAuth } from "../store/auth";

export const Service = () => {
  const { services } = useAuth();

  return <>
    <section className="section-services">
      <div className="container">
        <h1 className="main-heading">Services </h1>
      </div>

      <div className="container grid grid-three-cols">
        {services.map((curElem, index) => {
          const { CategoryID,CategoryName,CategoryDescription } = curElem;

          return (
            <div className="card" key={index}>
              <div className="card-img">
                <img
                  src="/img/event-management.jpg"
                  alt="our services info"
                  width="200"
                />
              </div>

              <div className="card-details">
                <div className="grid grid-two-cols">
                  <p>{CategoryID}</p>
                  
                </div>
                <h2>{CategoryName}</h2>
                <p>{CategoryDescription}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  </>
};