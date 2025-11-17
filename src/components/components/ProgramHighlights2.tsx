interface Props {
  title?: string;
  subText?: string;
  data: {
    label: string;
    points: string[];
    icon1: JSX.Element;
    iconBg: string;
  }[];
  sectionClass?: string;
  centerImg?: string;
  centerText?: string;
}

const ProgramHighlights2 = ({ title, subText, data, sectionClass, centerImg, centerText }: Props) => (
  <section className={`${sectionClass ?? ""}`}>
    <div className="container mx-auto">

      <div className="section-header text-center">
         <h2 className="mb-4 text-3xl md:text-5xl font-display leading-tight text-black">
            Program <span className="text-primary-600">Highlights</span>
          </h2>

      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 w-full">
        {/* Left side boxes */}
        <div className="flex flex-col">
          {data.slice(0, 3).map((item, idx) => (

            <div key={idx} className="md:mb-6 mb-4">
              <p className="md:text-lg text-center text-base font-semibold text-[#2f2477] mb-2">{item.label}</p>

              <div className="bg-[#021331] rounded-lg shadow-lg md:p-5 p-4 flex  items-center gap-4 w-full">
                <div className={`flex items-center shrink-0 justify-center md:w-14 md:h-14 w-10 h-10 md:rounded-xl rounded-md ${item.iconBg}`}>
                  {item.icon1}
                </div>
                <div>
                  <ul className="list-none text-gray-300">
                    {item.points.map((pt, i) => (
                      <li key={i} className={`md:text-base text-sm leading-tight ${i == 1 ? '' : 'mb-1'} `}>{pt}</li>
                    ))}
                  </ul>
                </div>
                {/* <div className={`flex items-center shrink-0 justify-center md:w-14 md:h-14 w-10 h-10 md:rounded-xl rounded-md ${item.iconBg}`}>
                  {item.icon2}
                </div> */}

              </div>

            </div>

          ))}
        </div>

        {/* Center circle image */}
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="relative w-60 h-60 flex items-center justify-center overflow-hidden">
            <img
              src={centerImg} // replace with your actual image
              alt="A Complete 360° AI Learning Experience!"
              className="object-cover w-full h-full rounded-full"
            />
          </div>

          <p className="text-center font-semibold text-gray-800 text-base leading-snug">
            {centerText}
          </p>
        </div>

        {/* Right side boxes */}
        <div className="flex flex-col">
          {data.slice(3).map((item, idx) => (

            <div key={idx} className="md:mb-6 mb-4">
              <p className="md:text-lg text-center text-base font-semibold text-[#2f2477] mb-2">{item.label}</p>

              <div className="bg-[#021331] rounded-lg shadow-lg md:p-5 p-4 flex  items-center gap-4 w-full">
                <div className={`flex items-center shrink-0 justify-center md:w-14 md:h-14 w-10 h-10 md:rounded-xl rounded-md ${item.iconBg}`}>
                  {item.icon1}
                </div>
                <div>
                  <ul className="list-none text-gray-300">
                    {item.points.map((pt, i) => (
                      <li key={i} className={`md:text-base text-sm leading-tight ${i == 1 ? '' : 'mb-1'} `}>{pt}</li>
                    ))}
                  </ul>
                </div>
                {/* <div className={`flex items-center shrink-0 justify-center md:w-14 md:h-14 w-10 h-10 md:rounded-xl rounded-md ${item.iconBg}`}>
                  {item.icon2}
                </div> */}

              </div>

            </div>

          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProgramHighlights2;
