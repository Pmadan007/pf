import React, { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import { FaStar as StarIcon } from 'react-icons/fa';
import './WorkExperience.css';
import { TimelineItem } from '../types';
import { getTimeline } from '../queries/getTimeline';

const WorkExperience: React.FC = () => {
  const [timeLineData, setTimeLineData] = useState<TimelineItem[] | null>(null);

  useEffect(() => {
    async function fetchTimelineItem() {
      const data = await getTimeline();
      setTimeLineData(data);
    }
    fetchTimelineItem();
  }, []);

  if (!timeLineData) return <div>Loading...</div>;

  console.log("🚀 ~ timeLineData:", timeLineData);

  return (
    <>
      <div className="timeline-container">
        <h2 className="timeline-title">📅 Work Experience & Education Timeline</h2>
      </div>
      <VerticalTimeline>
        {timeLineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${item.timelinetype}`}
            contentStyle={
              item.timelinetype === "work"
                ? index === 0
                  ? { background: 'rgb(33, 150, 243)', color: '#fff' }
                  : { background: 'rgb(240, 240, 240)', color: '#fff' }
                : { background: 'rgb(255, 224, 230)', color: '#fff' }
            }
            contentArrowStyle={
              item.timelinetype === "work"
                ? { borderRight: index === 0 ? '7px solid rgb(33, 150, 243)' : '7px solid rgb(240, 240, 240)' }
                : { borderRight: '7px solid rgb(255, 224, 230)' }
            }
            date={item.daterange}
            iconStyle={
              item.timelinetype === "work"
                ? { background: 'rgb(33, 150, 243)', color: '#fff' }
                : { background: 'rgb(255, 160, 200)', color: '#fff' }
            }
            icon={item.timelinetype === "work" ? <WorkIcon /> : <SchoolIcon />}
          >
            <div style={{ color: 'black' }}>
              {item.timelinetype === "work" ? (
                <>
                  <h3 className="vertical-timeline-element-title">{item.title}</h3>
                  <h4 className="vertical-timeline-element-subtitle">{item.name}</h4>
                  <p className="vertical-timeline-element-tech">🔧 {item.techstack}</p>
                </>
              ) : (
                <>
                  <h3 className="vertical-timeline-element-title">{item.name}</h3>
                  <h4 className="vertical-timeline-element-subtitle">{item.title}</h4>
                </>
              )}

              {/* bullet points */}
              {item.summarypoints && item.summarypoints.length > 0 && (
                <ul>
                  {item.summarypoints.map((point: string, idx: number) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </>
  );
};

export default WorkExperience;
