/* eslint-disable react/prop-types */
export function JobList({data, handleClick}){
    return(
        data.map((datos) => (
        <div
                className={
                  datos.new || datos.feature == true
                    ? "card__content-border"
                    : "card__content"
                }
                key={datos.id}
              >
                <div className="card__image">
                  <img
                    className="card__logo"
                    src={datos.logo}
                    alt={datos.company}
                  />
                </div>

                <div className="card__info">
                  <div className="card__description">
                    <div className="card__company">
                      <p className="company">{datos.company}</p>
                      {datos.new == true ? (
                        <span className="new">New!</span>
                      ) : (
                        ""
                      )}
                      {datos.featured == true ? (
                        <span className="featured">Featured</span>
                      ) : (
                        ""
                      )}
                    </div>
                    <p className="position">{datos.position}</p>
                    <div className="card__location">
                      <p className="postedAt">{datos.postedAt + " ·"}</p>
                      <p className="postedAt">{datos.contract + " ·"}</p>
                      <p className="postedAt">{datos.location}</p>
                    </div>
                    <span className="separator"></span>
                  </div>

                  <div className="card__tags">
                    <p
                      className="role"
                      onClick={handleClick}
                      value={datos.role}
                    >
                      {datos.role}
                    </p>
                    <p className="level" onClick={handleClick}>
                      {datos.level}
                    </p>
                    {datos.languages.map((languague) => (
                      <div key={languague}>
                        <p className="languague" onClick={handleClick}>
                          {languague}
                        </p>
                      </div>
                    ))}

                    <p
                      onClick={handleClick}
                      className={datos.tools == !"" ? "tools" : ""}
                    >
                      {datos.tools == !"" ? datos.tools : ""}{" "}
                    </p>
                  </div>
                </div>
              </div>
              ))
    )
}