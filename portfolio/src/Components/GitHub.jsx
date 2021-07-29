import GitHubCalendar from 'react-github-calendar';
import styles from './Css/Github.module.css';

function GitHub() {

    return (
        <div>

            <div className={styles.titleHeader} data-aos="fade-right">Github Contributions</div>
            <div className={styles.line} data-aos="fade-left"></div>


            <div className={styles.githubStatsCont}>

                <div className={styles.githubStats}>
                    <GitHubCalendar
                        username="info-vivekranjan"
                        showTotalCount={false}
                        blockSize={17}
                        blockMargin={3}
                        color="rgb(21, 255, 0)"

                    />

                </div>


            </div>



            <div className={styles.belowGithubCont}>
                <div className={styles.codingDetails}>
                    1200+
                    <br />
                    Hours
                    <br />
                    of coding
                </div>
                <div className={styles.codingDetails}>
                    450+
                    <br />
                    Git
                    <br />
                    Commits
                </div>
                <div className={styles.codingDetails}>
                    250+
                    <br />
                    HackerRank
                    <br />
                    and OJ
                    <br />
                    Problems
                </div>
            </div>


        </div>
    )

}

export { GitHub }