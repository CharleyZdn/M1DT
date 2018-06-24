<?php declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20180620100434 extends AbstractMigration
{
    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE openquizzdb ADD allthemes_id INT NOT NULL');
        $this->addSql('ALTER TABLE openquizzdb ADD CONSTRAINT FK_F76C71902BCABB75 FOREIGN KEY (allthemes_id) REFERENCES allthemes (id)');
        $this->addSql('CREATE INDEX IDX_F76C71902BCABB75 ON openquizzdb (allthemes_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE openquizzdb DROP FOREIGN KEY FK_F76C71902BCABB75');
        $this->addSql('DROP INDEX IDX_F76C71902BCABB75 ON openquizzdb');
        $this->addSql('ALTER TABLE openquizzdb DROP allthemes_id');
    }
}
