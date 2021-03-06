import React from "react";
import { Container, Row } from "react-bootstrap";
import { QuestionnaireItem } from "./QuestionnarieItem";
import { Spinner } from "./Spinner";

export const ListOfQuestionnaires = ({ questionnaires, onShowDeleteModal }) => {
  return (
    <>
      {questionnaires ? (
        <Container>
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "15px 0px",
            }}
          >
            {questionnaires?.map((questionnaire) => (
              <QuestionnaireItem
                key={questionnaire._id}
                questionnaire={questionnaire}
                onShowDeleteModal={onShowDeleteModal}
              />
            ))}
          </Row>
        </Container>
      ) : (
        <Spinner />
      )}
    </>
  );
};
