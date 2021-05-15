import classNames from 'classnames';
import React, { useContext } from 'react';
import styles from './CovidDetails.module.css';
import cx from 'classnames';
import { ThemeContext } from '../context/ThemeContextProvider';

function CovidTable({ countryData, setHl, hl }) {

    const { theme } = useContext(ThemeContext);

    return <div className={styles.allTableCont}>

        <div className={cx(styles.tableHeader, styles.tableHeader2)} style={{ backgroundColor: theme.covidtableHeaderBG }} >

            <div className={cx(styles.headerBlock)} style={{ border: theme.tableBorder, color: theme.textColor }}>Country</div>
            <div className={cx(styles.headerBlock, styles.totalcaseHeader)} style={{ border: theme.tableBorder, cursor: "pointer", color: theme.textColor }} onClick={() => setHl(!hl)}>
                {
                    hl &&
                    <i style={{ marginRight: "10px" }} class="ri-sort-desc"></i>
                }
                {
                    !hl &&
                    <i style={{ marginRight: "10px" }} class="ri-sort-asc"></i>
                }
                    Total Cases
                    </div>
            <div className={styles.headerBlock} style={{ border: theme.tableBorder, color: theme.textColor }}>New Cases</div>

            <div className={styles.headerBlock} style={{ border: theme.tableBorder, color: theme.textColor }}>Total Deceased</div>
            <div className={styles.headerBlock} style={{ border: theme.tableBorder, color: theme.textColor }}>New Deceased</div>

            <div className={styles.headerBlock} style={{ border: theme.tableBorder, color: theme.textColor }}>Recovered</div>

            <div className={styles.headerBlock} style={{ border: theme.tableBorder, color: theme.textColor }}>Active</div>

            <div className={styles.headerBlock} style={{ border: theme.tableBorder, color: theme.textColor }}>Total Tests</div>
            <div className={styles.headerBlock} style={{ border: theme.tableBorder, color: theme.textColor }}>Population</div>


        </div>
        <div>
            {
                countryData
                    .sort((a, b) => hl ? b.cases - a.cases : a.cases - b.cases)
                    .map((item) => {
                        return <div className={cx(styles.tableHeader, styles.tableRow)} style={{ backgroundColor: theme.statewiseBG }}>


                            <div className={cx(styles.headerBlock, styles.countryColumn)} style={{ backgroundColor: theme.covidtableHeaderBG, border: theme.tableBorder, color: theme.textColor }}>
                                {item.country}
                            </div>

                            <div className={styles.headerBlock} style={{ border: theme.tableBorder, color: theme.textColor }}>

                                {/* <p> + {item.todayCases}</p> */}
                                {
                                    Number(parseFloat(item.cases).toFixed(2)).toLocaleString('en', {
                                        minimumFractionDigits: 0
                                    })
                                }

                            </div>

                            <div className={cx(styles.headerBlock, styles.newCaseColumn)} style={{ border: theme.tableBorder }}>
                                {item.todayCases > 0 &&

                                    <span>
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
                            </div>



                            <div className={styles.headerBlock} style={{ border: theme.tableBorder, color: theme.textColor }}>

                                {
                                    Number(parseFloat(item.deaths).toFixed(2)).toLocaleString('en', {
                                        minimumFractionDigits: 0
                                    })
                                }

                            </div>

                            <div className={cx(styles.headerBlock, styles.newDeathsColumn)} style={{ border: theme.tableBorder }}>
                                {item.todayDeaths > 0 &&

                                    <span>
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
                            </div>


                            <div className={styles.headerBlock} style={{ border: theme.tableBorder, color: theme.textColor }}>


                                {
                                    Number(parseFloat(item.recovered).toFixed(2)).toLocaleString('en', {
                                        minimumFractionDigits: 0
                                    })
                                }
                            </div>


                            <div className={styles.headerBlock} style={{ border: theme.tableBorder, color: theme.textColor }}>

                                {
                                    Number(parseFloat(item.active).toFixed(2)).toLocaleString('en', {
                                        minimumFractionDigits: 0
                                    })
                                }

                            </div>


                            <div className={styles.headerBlock} style={{ border: theme.tableBorder, color: theme.textColor }}>
                                {
                                    Number(parseFloat(item.tests).toFixed(2)).toLocaleString('en', {
                                        minimumFractionDigits: 0
                                    })
                                }
                            </div>
                            <div className={styles.headerBlock} style={{ border: theme.tableBorder, color: theme.textColor }}>
                                {
                                    Number(parseFloat(item.population).toFixed(2)).toLocaleString('en', {
                                        minimumFractionDigits: 0
                                    })
                                }
                            </div>

                        </div>
                    })
            }
        </div>



    </div >

}
export { CovidTable }