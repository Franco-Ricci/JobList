export function JobFiltered ({results, handleClick}){
    return (
        results.map((result) => (
            <div
              className={
                result.new || result.feature == true
                  ? "card__content-border"
                  : "card__content"
              }
              key={result.id}
            >
              <div className="card__image">
                <img
                  className="card__logo"
                  src={result.logo}
                  alt={result.company}
                />
              </div>

              <div className="card__info">
                <div className="card__description">
                  <div className="card__company">
                    <p className="company">{result.company}</p>
                    {result.new == true ? (
                      <span className="new">New!</span>
                    ) : (
                      ""
                    )}
                    {result.featured == true ? (
                      <span className="featured">Featured</span>
                    ) : (
                      ""
                    )}
                  </div>
                  <p className="position">{result.position}</p>
                  <div className="card__location">
                    <p className="postedAt">{result.postedAt + " ·"}</p>
                    <p className="postedAt">{result.contract + " ·"}</p>
                    <p className="postedAt">{result.location}</p>
                  </div>
                  <span className="separator"></span>
                </div>

                <div className="card__tags">
                  <p
                    className="role"
                    onClick={handleClick}
                    value={result.role}
                  >
                    {result.role}
                  </p>
                  <p className="level" onClick={handleClick}>
                    {result.level}
                  </p>
                  {result.languages.map((languague) => (
                    <div key={languague}>
                      <p className="languague" onClick={handleClick}>
                        {languague}
                      </p>
                    </div>
                  ))}

                  <p
                    onClick={handleClick}
                    className={result.tools == !"" ? "tools" : ""}
                  >
                    {result.tools == !"" ? result.tools : ""}{" "}
                  </p>
                </div>
              </div>
            </div>
            ))
    )
}