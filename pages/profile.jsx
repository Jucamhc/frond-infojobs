import React, { useState, useEffect } from 'react';
import { dataProfile } from '@/data/dataProfile';
import { FaBriefcase, FaGraduationCap, FaLanguage, FaTools, FaMailBulk, FaLocationArrow } from 'react-icons/fa';
import { PieChart, Pie, Cell, Label } from 'recharts';
import Select from 'react-select'
import { aggregation } from '@/data/aggregationApi';

const Profile = () => {

  const [infoData, setInfoData] = useState([])
  const [infoCount, setInfoCount] = useState([])
  const [selectCategory, setSelectCategory] = useState('150')
  const [dataCategory, setDataCategory] = useState([])
  const [nameCategory, setNameCategory] = useState("")


  useEffect(() => {
    setSelectCategory(dataCategory.value)
    setNameCategory(dataCategory.label)

  }, [dataCategory])

  useEffect(() => {
    dataPieChart()
  }, [selectCategory])



  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 500 },
  ];

  const COLORS = ['#78909C', '#FF7043', '#4CAF50', '#2196F3'];
  const COLOR = ['#FF9800 ', '#009688', '#5C6BC0', '#607D8B', '#00BCD4', '#F44336'];


  const dataPieChart = async () => {

    let url = `https://api-infojobs.app.site-jucamhc.lat/api-offers/search?page=1&categoryIds=${selectCategory}`
    let data = await fetch(url).then((response) => response.json());
    setInfoCount(data?.segmentation?.utagParams?.es_sch_search_results_number)


    const newOptionsSelect = {

      teleworking: data.aggregation?.teleworking.map(item => ({
        name: item.label,
        value: item.count,
      })),

      workday: data.aggregation?.country
        .filter(item => item.label !== "España" && item.label !== "Otros contratos")
        .map(item => ({
          name: item.label,
          value: item.count
        })),


    }
    setInfoData(newOptionsSelect)
    //console.log(newOptionsSelect);

  }





  const {
    personalData: { firstName, hasProfileImg, lastName, secondLastName, email, address: { city, country: { value } } },
    experiences,
    studies,
    languages,
    skills,
  } = dataProfile[0];

  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
    dataPieChart()
  }, []);

  return (


    <div className="flex   justify-center px-4  bg-gray-100">
      <div className='items-center text-center   h-[950px]  rounded-md mr-4 py-4 w-full md:w-[20%] bg-white'>

        {/* Primer Diagrama */}
        <div className="text-center mb-2">
          <h1 className="text-xl font-bold">Categoría Preferida</h1>
          <p className='text-xs' id="nameCategoria">{nameCategory || "Informática-Telecomunicaciones"}</p>
        </div>

        <p className='mt-5 ml-4 underline text-left text-xs underline-offset-8 font-semibold'>Ofertas: {infoCount}</p>


        <p className='mt-5 underline text-right mr-6 text-xs underline-offset-8 font-semibold'>Presencial/Teletrabajo</p>
        <div style={{ overflow: 'hidden', width: '100%' }}>
          {domLoaded && infoData?.teleworking && (
            <PieChart width={320} height={300}>
              <Pie
                data={infoData.teleworking}
                cx={130}
                cy={150}
                innerRadius={35}
                outerRadius={50}
                paddingAngle={5}
                label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name }) => {
                  const RADIAN = Math.PI / 180;
                  const radius = innerRadius + (outerRadius - innerRadius) * 4.5;
                  const x = cx + radius * Math.cos(-midAngle * RADIAN);
                  const y = cy + radius * Math.sin(-midAngle * RADIAN);

                  return (
                    <>
                      <text x={x} y={y} style={{ fontSize: '18px' }} fill="black" textAnchor="middle" dominantBaseline="middle">
                        {`${(percent * 100).toFixed(0)}%`}
                      </text>
                      <text x={x} y={y + 20} style={{ fontSize: '14px' }} fill="black" textAnchor="middle" dominantBaseline="middle">
                        {name}
                      </text>
                    </>
                  );
                }}
                dataKey="value"
              >
                {infoData?.teleworking.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          )}
        </div>


        {/* Segundo Diagrama */}
        <p className='mt-6 underline text-xs text-right mr-6  underline-offset-8 font-semibold'>Trabajos por Paises</p>
        <p className='mt-3 ml-4 underline text-xs text-left  underline-offset-8 font-semibold'>Solo España 99%</p>

        <dataPieChart />
        <div style={{ overflow: 'hidden' }}>
          {domLoaded && infoData?.teleworking && (
            <PieChart width={320} height={320}>
              <Pie
                data={infoData.workday}
                cx={140}
                cy={150}
                innerRadius={35}
                outerRadius={50}
                paddingAngle={5}
                label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name }) => {
                  const RADIAN = Math.PI / 180;
                  const radius = innerRadius + (outerRadius - innerRadius) * 5.2;
                  const x = cx + radius * Math.cos(-midAngle * RADIAN);
                  const y = cy + radius * Math.sin(-midAngle * RADIAN);

                  return (
                    <>
                      <text x={x} y={y} style={{ fontSize: '18px' }} fill="black" textAnchor="middle" dominantBaseline="middle">
                        {`${(percent * 100).toFixed(0)}%`}
                      </text>
                      <text x={x} y={y + 20} style={{ fontSize: '14px' }} fill="black" textAnchor="middle" dominantBaseline="middle">
                        {name}
                      </text>
                    </>
                  );
                }}
                dataKey="value"
              >
                {infoData.workday.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLOR[index % COLOR.length]} />
                ))}
              </Pie>
            </PieChart>
          )}

        </div>

        <ul>
          <li key='provincia' className='mt-12 bg-white hover:bg-gray-200 rounded-lg my-3 p-3 items-center cursor-pointer'>
            <label className='text-sm' htmlFor='provincia'>Vista Diferentes Perfiles</label>
            <Select
              id='provincia'
              className='w-full text-xs'
              closeMenuOnSelect={true}
              /* components={animatedComponents} */
              defaultValue={[aggregation[0].category[4]]}
              /*   value={selectProvincia} */
              options={aggregation[0].category}
              isSearchable={true}
              onChange={(item) => setDataCategory(item)}
            />
          </li>
        </ul>

      </div>


      {/* Informacion de CV */}
      <div className="flex flex-col rounded-md items-center justify-center py-4 w-full lg:w-[65%] bg-white">
        <div className="w-[90%] lg:w-[45%]">
          <div className="flex items-center mb-4">
            <div>
              <h1 className="text-3xl font-bold mr-2">{firstName}</h1>
              <p className="text-3xl font-bold">{lastName} {secondLastName}</p>
            </div>
            {hasProfileImg && (
              <img className="h-32 w-32 rounded-full ml-auto" src="https://avatars.githubusercontent.com/u/54044345?v=4" alt="Profile" />
            )}
          </div>

          <div className="flex flex-col lg:flex-row mb-4">
            <p className="flex items-center mb-2 lg:mb-0">
              <FaMailBulk className="mr-2 text-[#2088c2]" />
              {email}
            </p>
            <p className="flex items-center mb-2 lg:mb-0 ml-0 lg:ml-4">
              <FaLocationArrow className="mr-2 text-[#2088c2]" />
              {city}
            </p>
            <p>{value}</p>
          </div>
        </div>

        <div className="flex flex-col w-[90%] lg:flex-row justify-evenly">
          <section className="my-8 mr-8 w-full lg:w-auto">
            <h2 className="text-xl font-bold mb-2">
              <FaGraduationCap className="inline mr-2 text-[#2088c2]" />
              Estudios
            </h2>
            {studies.entries.map((study) => (
              <div key={study.id} className="mb-4">
                <div className="font-semibold">{study.educationFamilyName}</div>
                <ul className="list-disc list-inside ml-4">
                  <li className="mb-1">{study.center}</li>
                  <li>
                    Duración: {(parseInt(study.duration) / 12).toFixed(1)} años
                  </li>
                </ul>
              </div>
            ))}
          </section>

          <div>
            <section className="my-8 mr-8 w-full lg:w-auto">
              <h2 className="text-xl font-bold mb-2">
                <FaGraduationCap className="inline mr-2 text-[#2088c2]" />
                Experiencias
              </h2>
              {experiences.entries.map((experience) => (
                <div key={experience.id} className="mb-4">
                  <div className="font-semibold">{experience.job}</div>
                  <ul className="list-disc list-inside ml-4">
                    <li className="mb-1">{experience.company}</li>
                    <li>
                      Inicia: {experience.startingDate} Termino:  {experience.endingDate}
                    </li>
                  </ul>
                </div>
              ))}
            </section>

            <section className="my-8 w-full lg:w-auto">
              <h2 className="text-xl font-bold mb-2">
                <FaLanguage className="inline mr-2 text-[#2088c2]" />
                Idiomas
              </h2>
              <ul className="list-disc list-inside">
                {languages.entries.map((language, level) => (
                  <li key={language.language.id}>{language.language.value} Nivel: {language.level.value}  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        <section className="w-[90%] ml-10 my-8 mr-8 lg:w-auto">
          <h2 className="text-xl font-bold mb-2">
            <FaTools className="inline mr-2 text-[#2088c2]" />
            Habilidades
          </h2>
          <ul className="flex flex-wrap gap-2">
            {skills.entries.map((skill) => (
              <li key={skill.id} className="border text-sm border-black hover:bg-gray-200 rounded px-2 py-1">
                {skill.skill}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>


  );
};

export default Profile;
