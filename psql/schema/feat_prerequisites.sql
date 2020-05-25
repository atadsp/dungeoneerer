-- Table: dungeoneerer.feat_prerequisites

-- DROP TABLE dungeoneerer.feat_prerequisites;

CREATE TABLE dungeoneerer.feat_prerequisites
(
    id SERIAL PRIMARY KEY,
    feat_id INT NOT NULL,
    prerequisite_feat_id INT NOT NULL,
    FOREIGN KEY (feat_id) REFERENCES dungeoneerer.feats(id) ON DELETE CASCADE,
    FOREIGN KEY (prerequisite_feat_id) REFERENCES dungeoneerer.feats(id) ON DELETE CASCADE
);