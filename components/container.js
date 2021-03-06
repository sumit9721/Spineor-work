export default function Container({
    center,
    vCenter,
    blue,
    dark,
    gray,
    wide,
    small,
    padding,
    overflow,
    minHeight,
    dotBackground,
    children,
    mobileStyle,
    divider,
    ...props
  }) {
    return (
      <div {...props}>
        <style jsx>
          {`
        {
          width: 1350px;
          margin: 0 auto;
          padding: ${padding ? '6.25rem' : '0'} ${wide ? '0' : '1rem'};
          ${wide && !small ? '' : 'max-width: 1024px;'}
          ${small ? 'max-width: 682px;' : ''}
          ${center ? 'text-align: center;' : ''}
          ${dark ? 'background: #111;' : ''}
          ${dark ? 'color: #f1f1f1;' : ''}
          ${gray ? 'background-color: #fafafa;' : ''}
          ${gray ? 'border-top: 1px solid #eaeaea;' : ''}
          ${gray ? 'border-bottom: 1px solid #eaeaea;' : ''}
          ${wide && !overflow ? 'overflow: hidden;' : ''}
          ${minHeight ? `min-height: ${minHeight}px;` : ''}
          ${vCenter ? 'display: flex; align-items: center;' : ''}
          ${
            dotBackground
              ? `
            background-image: radial-gradient(#D7D7D7 1px, transparent 1px), radial-gradient(#d7d7d7 1px, transparent 1px);
            background-position: 0 0, 25px 25px;
            background-size: 50px 50px;
          `
              : ''
          }
          ${divider ? `border-top: 1px solid rgba(0,0,0,0.1);` : ''}
        }
        ${divider ? `border-top: 1px solid rgba(0,0,0,0.1);` : ''}
      }
      :after {
        // BFC
        content: '';
        display: table;
        clear: both;
      }
      @media only screen and (max-width: 1164px) {
        width: 1205px;
      }
      @media only screen and (max-width: 1024px) {
        width: 1205px;
      }
      @media only screen and (max-width: 990px) {
        width: auto;
      }
      // CSS only media query for tablet
      @media screen and (max-width: 960px) {
        div {
          padding: ${padding ? '4rem' : '0'} ${wide ? '0' : '2rem'};
        }
<<<<<<< HEAD

        @media only screen and (max-width: 1164px) {
          width: 1205px;
        }

        @media only screen and (max-width: 1024px) {
          width: 1205px;
        }

        @media only screen and (max-width: 990px) {
          width: auto;
        }
        // CSS only media query for tablet
        @media screen and (max-width: 960px) {
          div {
            padding: ${padding ? '4rem' : '0'} ${wide ? '0' : '2rem'};
          }
=======
      }
      // CSS only media query for mobile
      @media screen and (max-width: 640px) {
        div {
          padding: ${padding ? '4rem' : '0'} ${wide ? '0' : '1rem'};
          ${mobileStyle || ''}
>>>>>>> master
        }
      }
    `}
      </style>
      {children}
    </div>
  );
}