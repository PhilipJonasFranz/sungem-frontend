import { Accordion, AccordionPanel, Box } from 'grommet';
import React from 'react';

export const DetailsAccordion = ({ module }) => (
    <Box>
        <Accordion multiple>
            <LinebreakAcccordionPanel
                label='Lerninhalt'
                content={module.kurs.content}
            />
            <LinebreakAcccordionPanel
                label='Qualifikationsziele / Lernergebnisse'
                content={module.kurs.qualification}
            />
            <LinebreakAcccordionPanel
                label='Voraussetzungen für die Teilnahme'
                content={module.kurs.requirements}
            />
            <LinebreakAcccordionPanel
                label='Prüfungsform'
                content={module.kurs.exam}
            />
        </Accordion>
    </Box>
);

const LinebreakAcccordionPanel = ({ label, content }) => (
    <AccordionPanel label={label}>
        <Box style={{ whiteSpace: 'pre-wrap' }}>
            {content ? (
                <p>{content}</p>
            ) : (
                <Box style={{ color: '#555' }}>
                    <i>this value is not set.</i>
                </Box>
            )}
        </Box>
    </AccordionPanel>
);
