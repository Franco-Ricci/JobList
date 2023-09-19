/* eslint-disable react/prop-types */

export function TagsFiltered({filter, handleClose, clearTags}){
    return (

        <div className="tags__filter">
        <div className="tags__content">
          {filter.map((f, index) => (
            <div className="tags__info" key={index}>
              <p className="tags__text">{f}</p>
              <span className="tags__close" onClick={() => handleClose(f)}>
                X
              </span>
            </div>
          ))}
        </div>
        <div>
          <span className="tags__clear" onClick={clearTags}>
            Clear
          </span>
        </div>
      </div>
    )
}