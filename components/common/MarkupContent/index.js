function createMarkup(content) {
  return { __html: content };
}

export default function MarkupContent({ ...props }) {
  return (
    <React.Fragment>
      <div
        className="markup-description"
        dangerouslySetInnerHTML={createMarkup(props.markupContentFull)}
      ></div>
      <div
        className="markup-smalldescription"
        dangerouslySetInnerHTML={createMarkup(props.markupContentSmall)}
      ></div>
      <div className= "knowmore"
        dangerouslySetInnerHTML={createMarkup(props.markupContent)}
      ></div>

      <style jsx>{`
        .markup-description {
          white-space: normal;
        }
        :global(.markup-description ul) {
          width: 100%;
          margin: 0;
          padding: 0 0 0 18px;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }
        :global(.markup-description ul li) {
          width: 50%;
          padding-right: 30px;
          margin-bottom: 10px;
        }

        :global(.markup-description p) {
          white-space: normal;
        }
        :global(.markup-description ul li) {
          white-space: normal;
        }
        .markup-smalldescription {
          display: none;
          white-space: normal;
        }
        :global(.markup-smalldescription p) {
          white-space: normal;
        }
        .knowmore {
          display: block;
        }
        @media (max-width: 989px) and (min-width: 768px) {
          .markup-description {
            display: none;
          }
          .markup-smalldescription {
            display: block;
          }
          .knowmore {
            display: block;
          }
        }
        @media (max-width: 640px) {
          .markup-description {
            display: none;
          }
          .markup-smalldescription {
            display: block;
          }
          .knowmore {
            display: block;
          }
        }
      `}</style>
    </React.Fragment>
  );
}
