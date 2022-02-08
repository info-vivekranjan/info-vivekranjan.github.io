import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContextProvider';
import styles from './CovidDetails.module.css';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
function SingleCountryData({ data }) {


    const { theme } = useContext(ThemeContext);
    const graphData = {
        labels: ['Confirmed', 'Active', 'Recovered', 'Deceased'],
        datasets: [
          {
            label: `${data?.country} Covid Details`,
            data: [data?.cases, data?.active, data?.recovered, data?.deaths],
            backgroundColor: [
              'rgba(255, 7, 58, 0.9)',
              'rgba(0, 123, 255, 0.9)',
              'rgba(40, 167, 69, 0.9)',
              'rgba(108, 117, 125, 0.9)',
            ],
            borderColor: [
              'rgba(255, 7, 58, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(40, 167, 69, 1)',
              'rgba(108, 117, 125, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };

    return <div div className={styles.fetchedDataCont}>


        <div className={styles.fetchedData} style={{ boxShadow: theme.boxShadow }}>

            {data.cases >= 0 &&
                <>
                    <div className={styles.singleDataCont}>

                        <div className={styles.singleCountry}>
                            <h2>{data.country}</h2>

                            <img className={styles.flagImg}
                                src={data.countryInfo.flag}
                                alt="countryFlag"
                            />

                        </div>

                        <div className={styles.singleConfirmed}>
                            <h4>Confirmed</h4>
                            <h5> +
                            {
                                    Number(parseFloat(data.todayCases).toFixed(2)).toLocaleString('en', {
                                        minimumFractionDigits: 0
                                    })
                                }
                            </h5>
                            <h2>
                                {
                                    Number(parseFloat(data.cases).toFixed(2)).toLocaleString('en', {
                                        minimumFractionDigits: 0
                                    })
                                }
                            </h2>
                        </div>

                        <div className={styles.singleActive}>
                            <h4>Active</h4>
                            <h5>0</h5>
                            <h2>
                                {
                                    Number(parseFloat(data.active).toFixed(2)).toLocaleString('en', {
                                        minimumFractionDigits: 0
                                    })
                                }
                            </h2>
                        </div>

                        <div className={styles.singleRecovered}>
                            <h4>Recovered</h4>
                            <h5> +
                                {
                                    Number(parseFloat(data.todayRecovered).toFixed(2)).toLocaleString('en', {
                                        minimumFractionDigits: 0
                                    })
                                }
                            </h5>
                            <h2>
                                {
                                    Number(parseFloat(data.recovered).toFixed(2)).toLocaleString('en', {
                                        minimumFractionDigits: 0
                                    })
                                }
                            </h2>
                        </div>

                        <div className={styles.singleDeceased}>
                            <h4>Deceased</h4>
                            <h5> +
                                {
                                    Number(parseFloat(data.todayDeaths).toFixed(2)).toLocaleString('en', {
                                        minimumFractionDigits: 0
                                    })
                                }
                            </h5>
                            <h2>
                                {
                                    Number(parseFloat(data.deaths).toFixed(2)).toLocaleString('en', {
                                        minimumFractionDigits: 0
                                    })
                                }
                            </h2>
                        </div>
                    </div>
                </>
            }

            <div style={{ width:'60%', margin: 'auto', marginBottom: '60px', paddingBottom: '20px'}}>
                <Line data={graphData} />
            </div>
        </div>

    </div >
}
export { SingleCountryData }