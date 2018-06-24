<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass="App\Repository\AllthemesRepository")
 */
class Allthemes
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $themeName;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Openquizzdb", mappedBy="theme")
     */
    private $theme_id;

    public function __construct()
    {
        $this->theme_id = new ArrayCollection();
    }

    public function getId()
    {
        return $this->id;
    }

    public function getThemeName(): ?string
    {
        return $this->themeName;
    }
    public function setThemeName(string $themeName): self
    {
        $this->$themeName = $themeName;

        return $this;
    }
    public function setThemeId(string $theme_id): self
    {
        $this->$theme_id = $theme_id;

        return $this;
    }
    

    /**
     * @return Collection|Openquizzdb[]
     */
    public function getThemeId(): Collection
    {
        return $this->theme_id;
    }

    public function addThemeId(Openquizzdb $themeId): self
    {
        if (!$this->theme_id->contains($themeId)) {
            $this->theme_id[] = $themeId;
            $themeId->setThemeId($this);
        }

        return $this;
    }

    public function removeThemeId(Openquizzdb $themeId): self
    {
        if ($this->theme_id->contains($themeId)) {
            $this->theme_id->removeElement($themeId);
            // set the owning side to null (unless already changed)
            if ($themeId->getThemeId() === $this) {
                $themeId->setThemeId(null);
            }
        }

        return $this;
    }
}
