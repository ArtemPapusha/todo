import React from 'react';

import { Card, Typography, Divider, Tag } from 'antd';
import { useOutletContext } from 'react-router-dom';

import type { ItemType } from '@generalTypes/task';
import type { OutletType } from '@layout/Components/component';

const { Text } = Typography;

interface TaskProps extends ItemType {}

const Task: React.FC<TaskProps> = ({
  type,
  id,
  title,
  description,
  member,
  tools,
  deadlines,
}) => {
  const { TaskDeleteBtn, TaskEditBtn } = useOutletContext<OutletType>();

  return (
    <>
      <Card
        title={title}
        extra={
          <>
            <TaskEditBtn id={id} typeTask={type} />
            <TaskDeleteBtn id={id} />
          </>
        }
        style={{ width: 250, margin: 5 }}
      >
        <Text>{description}</Text>
        <Divider orientation="left" plain>
          Member:
        </Divider>
        <Text>{member}</Text>

        {tools.length > 0 && (
          <>
            <Divider orientation="left" plain>
              Tools:
            </Divider>
            <Text>
              {tools.map((tool, index) => (
                <React.Fragment key={index}>
                  <Tag style={{ margin: 5 }}>{tool}</Tag>
                </React.Fragment>
              ))}
            </Text>
          </>
        )}
        {deadlines.dateStrings[0].trim() !== '' && deadlines.dateStrings[1].trim() !== '' && (
          <>
            <Divider orientation="left" plain>
              Deadlines:
            </Divider>
            <Text>
              Start: {deadlines.dateStrings[0]}
              <br />
              End: {deadlines.dateStrings[1]}
            </Text>
          </>
        )}
      </Card>
    </>
  );
};

export default Task;
