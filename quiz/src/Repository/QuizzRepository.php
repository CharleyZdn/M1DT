<?php

namespace App\Repository;

use App\Entity\Openquizzdb;
use Doctrine\ORM\EntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Openquizzdb|null find($id, $lockMode = null, $lockVersion = null)
 * @method Openquizzdb|null findOneBy(array $criteria, array $orderBy = null)
 * @method Openquizzdb[]    findAll()
 * @method Openquizzdb[]    findAllThemes()
 * @method Openquizzdb[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class QuizzRepository extends EntityRepository
{
  
    public function findAllOrderedByName()
    {
        return $this->getEntityManager()
        ->createQuery(
            'SELECT DISTINCT(p.theme)  FROM App:Openquizzdb p'
        )
        ->getResult();
    }
    public function findAllOrderedByNameQuest()
    {
        return $this->getEntityManager()
        ->createQuery(
            'SELECT p.question, p.theme FROM App:Openquizzdb p'
        )
        ->getResult();
    }
//    /**
//     * @return AppUsers[] Returns an array of AppUsers objects
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
    public function findOneBySomeField($value): ?AppUsers
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
