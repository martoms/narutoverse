package vauldex.lagomteststream.impl

import com.lightbend.lagom.scaladsl.api.ServiceCall
import vauldex.lagomteststream.api.LagomtestStreamService
import vauldex.lagomtest.api.LagomtestService

import scala.concurrent.Future

/**
  * Implementation of the LagomtestStreamService.
  */
class LagomtestStreamServiceImpl(lagomtestService: LagomtestService) extends LagomtestStreamService {
  def stream = ServiceCall { hellos =>
    Future.successful(hellos.mapAsync(8)(lagomtestService.hello(_).invoke()))
  }
}
