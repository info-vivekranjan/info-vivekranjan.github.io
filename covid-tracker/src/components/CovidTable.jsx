import React from 'react';
import styles from './CovidDetails.module.css';

function CovidTable({ countryData, setHl, hl }) {
    return <>
        <div className={styles.tableHeader}>
            <tr>
                <th>Country</th>
                <th style={{ cursor: "pointer" }} onClick={() => setHl(false)}>Total Cases</th>
                <th>New Cases</th>

                <th>Total Deceased</th>
                <th>New Deceased</th>

                <th>Recovered</th>

                <th>Active</th>

                <th>Total Tests</th>
                <th>Population</th>

            </tr>
        </div>
        <div>
            {
                countryData.sort((a, b) => hl ? b.cases - a.cases : a.cases - b.cases)
                    .map((item) => {
                        return <div className={styles.allCountryData}>
                            <tr>

                                <td className={styles.countryTD}>
                                    {item.country}
                                </td>

                                <td>

                                    {/* <p> + {item.todayCases}</p> */}
                                    {
                                        Number(parseFloat(item.cases).toFixed(2)).toLocaleString('en', {
                                            minimumFractionDigits: 0
                                        })
                                    }

                                </td>

                                <td>
                                    {item.todayCases > 0 &&

                                        <span style={{ color: "#007BFF" }}>
                                            + {
                                                Number(parseFloat(item.todayCases).toFixed(2)).toLocaleString('en', {
                                                    minimumFractionDigits: 0
                                                })
                                            }

                                        </span>
                                    }

                                    {item.todayCases === 0 &&

                                        <>
                                            {
                                                Number(parseFloat(item.todayCases).toFixed(2)).toLocaleString('en', {
                                                    minimumFractionDigits: 0
                                                })
                                            }
                                        </>
                                    }
                                </td>



                                <td>

                                    {
                                        Number(parseFloat(item.deaths).toFixed(2)).toLocaleString('en', {
                                            minimumFractionDigits: 0
                                        })
                                    }

                                </td>

                                <td>
                                    {item.todayDeaths > 0 &&

                                        <span style={{ color: "#FF073A" }}>
                                            + {
                                                Number(parseFloat(item.todayDeaths).toFixed(2)).toLocaleString('en', {
                                                    minimumFractionDigits: 0
                                                })
                                            }
                                        </span>
                                    }

                                    {item.todayDeaths === 0 &&

                                        <>

                                            {
                                                Number(parseFloat(item.todayDeaths).toFixed(2)).toLocaleString('en', {
                                                    minimumFractionDigits: 0
                                                })
                                            }
                                        </>
                                    }
                                </td>


                                <td>


                                    {
                                        Number(parseFloat(item.recovered).toFixed(2)).toLocaleString('en', {
                                            minimumFractionDigits: 0
                                        })
                                    }
                                </td>


                                <td>

                                    {
                                        Number(parseFloat(item.active).toFixed(2)).toLocaleString('en', {
                                            minimumFractionDigits: 0
                                        })
                                    }

                                </td>


                                <td>
                                    {
                                        Number(parseFloat(item.tests).toFixed(2)).toLocaleString('en', {
                                            minimumFractionDigits: 0
                                        })
                                    }
                                </td>
                                <td>
                                    {
                                        Number(parseFloat(item.population).toFixed(2)).toLocaleString('en', {
                                            minimumFractionDigits: 0
                                        })
                                    }
                                </td>
                            </tr>
                        </div>
                    })
            }
        </div>
    </>

}
export { CovidTable }