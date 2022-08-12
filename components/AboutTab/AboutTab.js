import styles from "./AboutTab.module.scss";

const AboutTab = () => {
  return (
    <div className={styles["afdq-tab"]}>
      <div className={styles["header"]} id="about">
        About
      </div>
      <p>
        The continued enforcement of quarantine regulations in the Philippines
        due to Covid-19 have made it imperative to expand our line-up of virtual
        events. With the live staging of Aliwan Fiesta still on hold, and with
        it the search for Reyna ng Aliwan, which has jumpstarted the career of
        many beauteous Filipinas on the national and international pageant
        circuit, Manila Broadcasting Company now launches the second edition of
        its online search for Aliwan Fiesta Digital Queen.
      </p>
      <p>
        As previously explained, this is a title distinct from Reyna ng Aliwan,
        which will remain part of the mammoth cultural spectacle dubbed as the
        Philippines’ grandest fiesta. With the candidates’ participation via
        cyberspace, the search for 2021 Aliwan Fiesta Digital Queen will keep
        the hopes and dreams of beauteous and talented Filipinas alive,
        catapulting them into the spotlight, and enabling them to further
        inspire and influence today’s youth by harnessing the power of digital
        media to serve as exemplary models in the community.
      </p>
      <div className={styles["header"]} id="how-to-vote">
        How to vote
      </div>
      <p>
        Visit the official website of DZRH and go to the AFDQ Voting landing
        page. Voters must create a DZRH account or use their existing accounts.
        The Top 12 Finalists are shown in the voting site’s main screen in
        random order. Voters will have to simply select the candidate they wish
        to vote for. A voter can only vote for one candidate, per day, per
        account. Voting starts on September 11 until October 3, 2021.
      </p>
      <div className={styles["header"]} id="faqs">
        FAQs
      </div>
      <strong>WHAT IS NETIZENS’ CHOICE AWARD?</strong>
      <p>
        This is a special award given to the candidate who will garner the
        highest number of votes during the DTI-approved voting period.
      </p>
      <strong>WHAT IS THE VOTING PERIOD?</strong>
      <p>
        Voting starts on September 11, 2021 (12:00 a.m.) and will end on October
        3, 2021 (11:59 p.m).
      </p>
      <strong>WHAT IS THE PRIZE AT STAKE?</strong>
      <p>The winner of the Netizens’ Choice Award will get Php 15,000.</p>
      <strong>HOW CAN I VOTE?</strong>
      <p>
        Step 1: Visit the official website of DZRH and go to the Netizens’
        Choice Award page.
      </p>
      <p>
        Step 2: Voters must create a DZRH account or use their existing DZRH
        account.
      </p>
      <p>
        Step 3: Voters to check the list of the Top 12 candidates. Then, click
        the candidate’s profile or the vote button.
      </p>
      <p>
        Step 4: Read and agree to the Terms and Condition and Privacy Policy.
      </p>
      <p> Step 5: Cast your vote by clicking on the VOTE button.</p>
      <strong>HOW MANY TIMES CAN I VOTE?</strong>
      <p>
        You can vote for one candidate, per account, per day. If you want to
        vote again for your favorite candidate, you can visit the Netizens’
        Choice Award voting page again the next day or after 24 hours.
      </p>
      <strong>
        DO I NEED TO CREATE A NEW DZRH ACCOUNT IF I ALREADY HAVE ONE?
      </strong>
      <p>
        No. If you already have an existing account, you can simply log in and
        vote for your candidate.
      </p>
      <strong>THE ORDER OF THE CANDIDATES IS IN RANDOM ORDER, WHY?</strong>
      <p>
        The voting site shows the candidates in random order and not by official
        candidate number to assure equal exposure to all. This ensures that the
        candidates have equal chance to be shown in the upper fold of the
        website.
      </p>
      <strong>WHO WILL VERIFY THE WINNER?</strong>
      <p>The winner will be verified by a DTI representative.</p>
      <strong>
        WILL THE VOTES AFFECT THE OVERALL STANDING OF THE CANDIDATE?
      </strong>
      <p>
        No. The votes are purely for the Netizens’ Choice Award as a special
        award.
      </p>
    </div>
  );
};

export default AboutTab;
