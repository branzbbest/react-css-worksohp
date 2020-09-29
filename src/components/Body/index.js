import React, { useState } from "react";
import style from "./main.module.css";

function Body() {
  const [inputValue, setInputValue] = useState("");
  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <>
      <div className={style.body_container}>
        <div className={style.body}>
          <div className={style.input_container}>
            <input type="text" value={inputValue} onChange={handleOnChange} />
            <button>Search</button>
            <div className={style.info}>
              <h1>{inputValue}</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                rhoncus enim et sem vehicula lacinia. Mauris ut libero ac purus
                mollis tempor. Integer ut ornare nisi. Duis lectus sapien,
                fermentum placerat luctus sed, aliquam nec urna. Nunc tortor
                nisl, rutrum eget tortor dignissim, tincidunt auctor est.
                Maecenas suscipit ipsum eu erat faucibus mollis. Curabitur at
                hendrerit dui. Aenean pellentesque vitae erat ac consectetur.
                Pellentesque vitae mauris lacus. Integer pellentesque pretium
                arcu. Nullam vel lectus congue, blandit lectus nec, pulvinar
                urna. Nam vel fringilla sem. Duis molestie nulla felis, et
                sollicitudin dui maximus nec. Quisque eu iaculis felis, sed
                egestas urna. Cras orci dolor, sollicitudin fermentum urna ut,
                pharetra ultrices metus. Maecenas hendrerit, sapien et posuere
                lobortis, purus lacus tincidunt dui, nec elementum mauris metus
                sit amet dolor. Suspendisse euismod, ligula sit amet elementum
                venenatis, enim ipsum placerat lectus, sit amet ullamcorper
                ipsum leo ut justo. Nulla massa turpis, congue ut cursus vel,
                rutrum non elit. Proin justo lacus, euismod id pharetra eget,
                auctor vitae leo. Etiam bibendum rutrum pharetra. Sed congue
                ligula at orci tincidunt sodales. Nulla vel turpis at nisl
                vestibulum lacinia nec sed erat. Sed in pharetra mi. Nunc
                consequat feugiat rutrum. Donec eleifend vel enim non eleifend.
                Phasellus gravida arcu sed ullamcorper laoreet. Nunc at
                ullamcorper leo. Fusce imperdiet ultrices enim at scelerisque.
                Morbi est felis, commodo vel suscipit quis, sodales nec eros.
                Curabitur scelerisque libero non augue varius, at ornare ipsum
                vehicula. Nullam efficitur eros feugiat leo dignissim gravida.
                Sed euismod congue fringilla. Proin sit amet felis placerat,
                porta eros eu, consequat lectus. Etiam venenatis pellentesque
                odio, ac cursus turpis blandit vel. Praesent in leo enim. Nunc
                quis tellus efficitur, bibendum neque nec, ullamcorper diam.
                Vivamus cursus lacus sed purus accumsan, vel scelerisque tortor
                finibus. In ipsum eros, tempor sed euismod in, vulputate tempor
                nisl. Suspendisse hendrerit, nulla eget semper bibendum, elit
                turpis pretium tellus, quis semper odio erat eu tortor.
                Curabitur vel justo sed sapien pellentesque eleifend. Nulla
                facilisi. Interdum et malesuada fames ac ante ipsum primis in
                faucibus. Vestibulum ante ipsum primis in faucibus orci luctus
                et ultrices posuere cubilia curae; Donec commodo, tellus vel
                cursus porttitor, risus metus venenatis arcu, vel facilisis odio
                dolor sit amet nunc. Praesent fermentum est sit amet massa
                blandit auctor. Vestibulum ante ipsum primis in faucibus orci
                luctus et ultrices posuere cubilia curae; Ut et ante porta,
                dictum tortor et, finibus dolor. Etiam pharetra arcu libero.
                Cras eu tellus eget ipsum suscipit venenatis. Donec eget metus
                tristique, iaculis ante id, varius lorem. Mauris velit orci,
                laoreet eget velit vitae, volutpat ullamcorper turpis. Cras nibh
                metus, gravida eget purus id, sagittis sagittis diam. Curabitur
                sollicitudin iaculis ante, vel ultrices nibh finibus id. Sed
                sollicitudin tortor at tristique tristique.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Body;
