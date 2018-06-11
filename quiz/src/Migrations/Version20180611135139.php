<?php declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20180611135139 extends AbstractMigration
{
    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE openquizzdb CHANGE theme theme VARCHAR(100) NOT NULL, CHANGE question question VARCHAR(255) NOT NULL, CHANGE prop1 prop1 VARCHAR(40) NOT NULL, CHANGE prop2 prop2 VARCHAR(40) NOT NULL, CHANGE prop3 prop3 VARCHAR(40) NOT NULL, CHANGE prop4 prop4 VARCHAR(40) NOT NULL, CHANGE difficulte difficulte VARCHAR(9) NOT NULL, CHANGE anecdote anecdote VARCHAR(255) NOT NULL, CHANGE wiki wiki VARCHAR(50) NOT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE openquizzdb CHANGE theme theme VARCHAR(100) DEFAULT \'\' NOT NULL COLLATE latin1_swedish_ci, CHANGE question question VARCHAR(255) DEFAULT \'\' NOT NULL COLLATE latin1_swedish_ci, CHANGE prop1 prop1 VARCHAR(40) DEFAULT \'\' NOT NULL COLLATE latin1_swedish_ci, CHANGE prop2 prop2 VARCHAR(40) DEFAULT \'\' NOT NULL COLLATE latin1_swedish_ci, CHANGE prop3 prop3 VARCHAR(40) DEFAULT \'\' NOT NULL COLLATE latin1_swedish_ci, CHANGE prop4 prop4 VARCHAR(40) DEFAULT \'\' NOT NULL COLLATE latin1_swedish_ci, CHANGE difficulte difficulte VARCHAR(9) DEFAULT \'\' NOT NULL COLLATE latin1_swedish_ci, CHANGE anecdote anecdote VARCHAR(255) DEFAULT \'\' NOT NULL COLLATE latin1_swedish_ci, CHANGE wiki wiki VARCHAR(50) DEFAULT \'\' NOT NULL COLLATE latin1_swedish_ci');
    }
}
