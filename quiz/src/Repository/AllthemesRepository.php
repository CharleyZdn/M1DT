<?php

namespace App\Repository;

use App\Entity\Allthemes;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Allthemes|null find($id, $lockMode = null, $lockVersion = null)
 * @method Allthemes|null findOneBy(array $criteria, array $orderBy = null)
 * @method Allthemes[]    findAll()
 * @method Allthemes[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AllthemesRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Allthemes::class);
    }

//    /**
//     * @return Allthemes[] Returns an array of Allthemes objects
//     */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('a.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Allthemes
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
