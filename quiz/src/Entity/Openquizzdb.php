<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;

/**
 * Openquizzdb
 *
 * @ApiResource
 * @ORM\Table(name="openquizzdb")
 * @ORM\Entity
 */
class Openquizzdb
{
    /**
     * @var int
     *
     * @ORM\Column(name="quizz_id", type="integer", nullable=false, options={"unsigned"=true})
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $quizzId;

    /**
     * @var string
     *
     * @ORM\Column(name="theme", type="string", length=100, nullable=false)
     */
    private $theme = '';

    /**
     * @var string
     *
     * @ORM\Column(name="question", type="string", length=255, nullable=false)
     */
    private $question = '';

    /**
     * @var string
     *
     * @ORM\Column(name="prop1", type="string", length=40, nullable=false)
     */
    private $prop1 = '';

    /**
     * @var string
     *
     * @ORM\Column(name="prop2", type="string", length=40, nullable=false)
     */
    private $prop2 = '';

    /**
     * @var string
     *
     * @ORM\Column(name="prop3", type="string", length=40, nullable=false)
     */
    private $prop3 = '';

    /**
     * @var string
     *
     * @ORM\Column(name="prop4", type="string", length=40, nullable=false)
     */
    private $prop4 = '';

    /**
     * @var string
     *
     * @ORM\Column(name="difficulte", type="string", length=9, nullable=false)
     */
    private $difficulte = '';

    /**
     * @var string
     *
     * @ORM\Column(name="anecdote", type="string", length=255, nullable=false)
     */
    private $anecdote = '';

    /**
     * @var string
     *
     * @ORM\Column(name="wiki", type="string", length=50, nullable=false)
     */
    private $wiki = '';

    public function getQuizzId(): ?int
    {
        return $this->quizzId;
    }

    public function getTheme(): ?string
    {
        return $this->theme;
    }

    public function setTheme(string $theme): self
    {
        $this->theme = $theme;

        return $this;
    }

    public function getQuestion(): ?string
    {
        return $this->question;
    }

    public function setQuestion(string $question): self
    {
        $this->question = $question;

        return $this;
    }

    public function getProp1(): ?string
    {
        return $this->prop1;
    }

    public function setProp1(string $prop1): self
    {
        $this->prop1 = $prop1;

        return $this;
    }

    public function getProp2(): ?string
    {
        return $this->prop2;
    }

    public function setProp2(string $prop2): self
    {
        $this->prop2 = $prop2;

        return $this;
    }

    public function getProp3(): ?string
    {
        return $this->prop3;
    }

    public function setProp3(string $prop3): self
    {
        $this->prop3 = $prop3;

        return $this;
    }

    public function getProp4(): ?string
    {
        return $this->prop4;
    }

    public function setProp4(string $prop4): self
    {
        $this->prop4 = $prop4;

        return $this;
    }

    public function getDifficulte(): ?string
    {
        return $this->difficulte;
    }

    public function setDifficulte(string $difficulte): self
    {
        $this->difficulte = $difficulte;

        return $this;
    }

    public function getAnecdote(): ?string
    {
        return $this->anecdote;
    }

    public function setAnecdote(string $anecdote): self
    {
        $this->anecdote = $anecdote;

        return $this;
    }

    public function getWiki(): ?string
    {
        return $this->wiki;
    }

    public function setWiki(string $wiki): self
    {
        $this->wiki = $wiki;

        return $this;
    }


}
