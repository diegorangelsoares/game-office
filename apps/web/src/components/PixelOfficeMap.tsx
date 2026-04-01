"use client";

import type { ProjectSpot } from "@game-office/shared";
import styles from "./PixelOfficeMap.module.css";

type Props = {
  playerName: string;
  spots: ProjectSpot[];
  onInspect: (spot: ProjectSpot) => void;
};

export function PixelOfficeMap({ playerName, spots, onInspect }: Props) {
  const spotA = spots[0];
  const spotB = spots[1];
  const spotC = spots[2];

  return (
    <div className={styles.viewport}>
      <div className={styles.scaleFrame}>
        <section className={styles.pixelRoot}>
          <div className={`${styles.room} ${styles.productTeam}`}>
            <h3 className={styles.roomTitle}>Product team</h3>
            <div className={styles.longDeskTop} />
            <div className={styles.longDeskBottom} />
            <div className={`${styles.chair} ${styles.chair1}`} />
            <div className={`${styles.chair} ${styles.chair2}`} />
            <div className={`${styles.chair} ${styles.chair3}`} />
            <div className={`${styles.chair} ${styles.chair4}`} />
            <div className={`${styles.chair} ${styles.chair5}`} />
            <div className={`${styles.chair} ${styles.chair6}`} />
            <div className={`${styles.monitor} ${styles.monitor1}`} />
            <div className={`${styles.monitor} ${styles.monitor2}`} />
            <div className={`${styles.monitor} ${styles.monitor3}`} />
            <div className={`${styles.monitor} ${styles.monitor4}`} />
            <div className={`${styles.monitor} ${styles.monitor5}`} />
            <div className={`${styles.monitor} ${styles.monitor6}`} />
            <div className={`${styles.plant} ${styles.plantTop}`} />
            <div className={`${styles.lamp} ${styles.lampTop}`} />
            <div className={`${styles.badge} ${styles.badgeBrad}`}>Brad</div>
            <div className={`${styles.badge} ${styles.badgeAlison}`}>Alison</div>
            <div className={`${styles.badge} ${styles.badgeYou}`}>
              <span className={styles.dot} />
              You
            </div>
            {spotA ? (
              <button className={`${styles.projectHotspot} ${styles.hotspotA}`} onClick={() => onInspect(spotA)}>
                {spotA.name}
              </button>
            ) : null}
            {spotB ? (
              <button className={`${styles.projectHotspot} ${styles.hotspotB}`} onClick={() => onInspect(spotB)}>
                {spotB.name}
              </button>
            ) : null}
          </div>

          <div className={`${styles.room} ${styles.lounge}`}>
            <div className={styles.sofaTop} />
            <div className={styles.sofaBottom} />
            <div className={styles.roundTable} />
            <div className={styles.shelfLeft} />
            <div className={styles.shelfRight} />
            <div className={`${styles.puff} ${styles.puffA}`} />
            <div className={`${styles.puff} ${styles.puffB}`} />
            <div className={`${styles.puff} ${styles.puffC}`} />
            <div className={`${styles.puff} ${styles.puffD}`} />
            <div className={`${styles.plant} ${styles.plantLoungeA}`} />
            <div className={`${styles.plant} ${styles.plantLoungeB}`} />
          </div>

          <div className={`${styles.room} ${styles.gameRoom}`}>
            <div className={styles.pingPong} />
            <div className={styles.centerTable} />
            <div className={styles.sofaLeft} />
            <div className={styles.sofaBottom} />
            <div className={`${styles.chairOrange} ${styles.oc1}`} />
            <div className={`${styles.chairOrange} ${styles.oc2}`} />
            <div className={`${styles.chairOrange} ${styles.oc3}`} />
            <div className={`${styles.plant} ${styles.plantGameA}`} />
            <div className={`${styles.plant} ${styles.plantGameB}`} />
            <div className={`${styles.plant} ${styles.plantGameC}`} />
          </div>

          <div className={`${styles.room} ${styles.cxTeam}`}>
            <h3 className={styles.roomTitleCx}>CX team</h3>
            <div className={styles.cxDeskTop} />
            <div className={styles.cxDeskBottom} />
            <div className={`${styles.chair} ${styles.cxChair1}`} />
            <div className={`${styles.chair} ${styles.cxChair2}`} />
            <div className={`${styles.chair} ${styles.cxChair3}`} />
            <div className={`${styles.chair} ${styles.cxChair4}`} />
            <div className={`${styles.monitor} ${styles.cxMonitor1}`} />
            <div className={`${styles.monitor} ${styles.cxMonitor2}`} />
            <div className={`${styles.monitor} ${styles.cxMonitor3}`} />
            <div className={`${styles.monitor} ${styles.cxMonitor4}`} />
            <div className={styles.badgeCx}>Som, Morgan</div>
            {spotC ? (
              <button className={`${styles.projectHotspot} ${styles.hotspotC}`} onClick={() => onInspect(spotC)}>
                {spotC.name}
              </button>
            ) : null}
          </div>

          <div className={styles.playerTag}>{playerName}</div>
        </section>
      </div>
    </div>
  );
}
